export class Comment {

   constructor (public userId: number, public id: number, public name: string, public title: string, public body: string) {}

   toForm(): string {
      return `postId=${this.userId}&id=${this.id}&title=${this.title}&name=${this.name}&title=${this.title}&body=${this.body}`;
   }
}
