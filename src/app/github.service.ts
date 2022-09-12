import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

 
  private readonly urlRepoProfile = 'https://api.github.com/repos/LucasFernandez11/LucasFernandez11';
  private readonly url = 'https://api.github.com/users/LucasFernandez11/repos';
  private readonly urlContent = 'https://raw.githubusercontent.com/wiki/LucasFernandez11';
  // private readonly urlRepoProfile = 'https://api.github.com/repos/LucasFernandez11/portfolio-web';

  constructor(private httpClient: HttpClient) {
  }
  loadRepos = ()=> this.httpClient.get(this.url);

  // loadRepos = () => {
  //   return this.httpClient.get(`${this.url}?type=owner&per_page=100`)
  //     .pipe(
  //       map((item: any) => item.filter(value => !value.fork)),
  //       map((item: any) => item.filter(value => (value.stargazers_count > 3)))
  //     );
  // };

  getImage = (text: string) => {
    try {
      return text.match(/!\[[^\]]*\]\((?<filename>.*?)(?=\"|\))(?<optionalpart>\".*\")?\)/);
    } catch (e) {
      return null;
    }
  };

  getRepo = () => {
    try {
      return this.httpClient.get(this.urlRepoProfile)
    } catch (e) {
      return null;
    }
  };

  buildHome = (repo: string) => {
    let urlContent = this.urlContent;
    console.log(this.getImage(repo))
    return urlContent += `${repo}/Home.md`;
  };
}
