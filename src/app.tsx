import { html } from "@elysiajs/html";
import { jwt } from "@elysiajs/jwt";
import { Elysia, t } from "elysia";
import { Protected, NotLogged, Logged, Login } from "./layouts";

// this is sample users, you should use a database in production
const users = [
  {
    username: "admin",
    password: await Bun.password.hash("admin"),
  },
  {
    username: "user",
    password: await Bun.password.hash("user"),
  },
];

new Elysia()
  .use(
    jwt({
      name: "jwt",
      // This is a secret key, you should change it in production
      secret: "your secret",
    })
  )
  .use(html())
  .get("/", async ({ jwt, cookie: { auth } }) => {
    const authCookie = await jwt.verify(auth.value);
    return authCookie ? <Logged /> : <Login />;
  })
  .get("/protected", async ({ jwt, cookie: { auth } }) => {
    const authCookie = await jwt.verify(auth.value);
    return authCookie ? (
      <Protected username={authCookie.username} />
    ) : (
      <NotLogged />
    );
  })
  .post(
    "/login",
    async ({ jwt, body, set, cookie: { auth } }) => {
      const { password, username } = body;

      const user = users.find((user) => user.username === username);

      if (user && (await Bun.password.verify(password, user.password))) {
        const token = await jwt.sign({ username });

        auth.set({
          value: token,
          httpOnly: true,
        });

        set.headers = {
          "Hx-redirect": "/protected",
        };
        return "Login successful!";
      }
      return "Invalid credentials";
    },
    {
      body: t.Object({
        username: t.String(),
        password: t.String(),
      }),
    }
  )
  .get("/logout", ({ set, cookie: { auth } }) => {
    auth.remove();
    set.redirect = "/";
  })
  .listen(8081);
