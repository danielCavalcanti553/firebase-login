import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { StorageService } from '../../services/storage.service';

/**
 * Generated class for the CategoriasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-categorias',
  templateUrl: 'categorias.html',
})
export class CategoriasPage {

  user : string;
  

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public firebaseauth: AngularFireAuth,
    public toastCtrl: ToastController,
    public storageService : StorageService) {

      this.user = storageService.getLocalUser();
      
  }

  public Sair(): void {
    this.firebaseauth.auth.signOut()
    .then(() => {
    
      this.storageService.setNullLocalUser();
      this.exibirToast("Você saiu");
    })
    .catch((erro: any) => {
      this.exibirToast(erro);
    });
  }

  private exibirToast(mensagem: string): void {
    let toast = this.toastCtrl.create({duration: 4000, position: 'botton'});
    toast.setMessage(mensagem);
    toast.present();
  }
}
