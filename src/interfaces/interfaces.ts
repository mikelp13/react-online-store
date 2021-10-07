export interface IRoute {
  path: string;
  name: string;
  exact: boolean;
  component: any;
  isPrivate: boolean;
  restricted: boolean;
}
