# frontend
Users apps
# deploy
clinics-app: https://spontaneous-salamander-6fccd4.netlify.app/

Приватный роутинг в React позволяет скрывать определенные страницы или маршруты от пользователей с определенными ролями или доступом.

Процесс создания приватного роутинга включает в себя несколько шагов:

1. Необходимо определить роли пользователей, которым нужно предоставить доступ к определенным страницам.
2. Создайте компонент, который будет представлять приватный маршрут. Этот компонент будет проверять роль текущего пользователя и редиректить его на нужную страницу в зависимости от его роли.
3. Импортируйте компонент `BrowserRouter` из библиотеки `react-router-dom` и оберните все свои маршруты внутри него.
4. Используйте компонент `Switch` для определения ваших маршрутов.
5. Внутри компонента `Switch` определите приватный маршрут с использованием созданного вами компонента приватного маршрута и укажите необходимые роли и соответствующий путь.
6. Обязательно укажите общий маршрут для всех пользователей, чтобы указать, что делать, если пользователь не имеет достаточных прав для доступа к приватному маршруту.

Вот пример приватного роутинга:

```javascript
import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

// Компонент, отвечающий за приватные маршруты
const PrivateRoute = ({ component: Component, roles, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      roles.includes(currentUser.role) ? (
        <Component {...props} />
      ) : (
        <Redirect to="/unauthorized" />
      )
    }
  />
);

// Определение всех маршрутов
const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route path="/unauthorized" component={Unauthorized} />
        <PrivateRoute
          exact
          path="/admin"
          roles={['admin']}
          component={AdminPage}
        />
        <PrivateRoute
          exact
          path="/user"
          roles={['user', 'admin']}
          component={UserPage}
        />
        <PrivateRoute path="*" component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
```

В этом примере, если у текущего пользователя есть роль 'admin', он сможет увидеть страницу '/admin'. Если у пользователя есть роль 'user' или 'admin', он сможет увидеть страницу '/user'. Если у пользователя нет необходимых ролей, он будет перенаправлен на страницу '/unauthorized'. Последний маршрут с путем "* " соответствует любому URL, который не был определен ранее, и перенаправляет пользователя на страницу NotFound.