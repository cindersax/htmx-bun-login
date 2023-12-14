export const BaseLayout = ({ children }: any) => {
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>My page</title>
        <script src="https://unpkg.com/htmx.org@1.9.9"></script>
      </head>
      <body id="main">{children}</body>
    </html>
  );
};

export const Login = () => {
  return (
    <BaseLayout>
      <div>
        <h1>Login</h1>
        <p>Please login to continue</p>

        <form hx-post="/login" hx-target=".error" hx-swap="innerHTML">
          <fieldset>
            <legend>Login</legend>
            <p>
              <label for="username">Username:</label>
              <input type="text" id="username" name="username" />
            </p>
            <p>
              <label for="password">Password:</label>
              <input type="password" id="password" name="password" />
            </p>

            <button type="submit">Login</button>
            <p>
              <span class="error"></span>
            </p>
          </fieldset>
        </form>
      </div>
    </BaseLayout>
  );
};

export const Logged = () => {
  return (
    <BaseLayout>
      <h1>Login</h1>
      <p>You are already logged in</p>
      <a href="/logout">Logout</a>
    </BaseLayout>
  );
};

export const NotLogged = () => {
  return (
    <BaseLayout>
      <h1>Protected route</h1>
      <p>Hi, you are not logged in</p>
      <a href="/login">Login</a>
    </BaseLayout>
  );
};

export const Protected = ({ username }: { username: string }) => {
  return (
    <BaseLayout>
      <h1>Protected route</h1>
      <p>Hi {username}</p>
      <a href="/logout">Logout</a>
    </BaseLayout>
  );
};
