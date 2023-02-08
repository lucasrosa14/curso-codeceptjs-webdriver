/// <reference types='codeceptjs' />
type steps_file = typeof import('./steps_file.js');
type home_page = typeof import('./pages/home_page.js');
type login_page = typeof import('./pages/login_page.js');
type create_user_page = typeof import('./pages/create_user_page.js');
type my_account_page = typeof import('./pages/my_account_page.js');

declare namespace CodeceptJS {
  interface SupportObject { I: I, current: any, home_page: home_page, login_page: login_page, create_user_page: create_user_page, my_account_page: my_account_page }
  interface Methods extends playwright {}
  interface I extends ReturnType<steps_file>, WithTranslation<playwright> {}
  namespace Translation {
    interface Actions {}
  }
}
