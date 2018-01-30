export class Comment {

   constructor (public postId: number, public cid: number, public cname: string, public ctitle: string, public cbody: string) {}

   toForm(): string {
      return `postId=${this.userId}&cid=${this.cid}&cname=${this.cname}&ctitle=${this.ctitle}&cbody=${this.cbody}`;
   }
}
