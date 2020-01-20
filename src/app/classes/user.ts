export class User {
    constructor(
        public username: string,
        public login: string,
        public avatar_url: string,
        public html_url: string,
        public name: string,
        public public_repos: number,
        public followers: number,
        public following: number
      ){}
}
