import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-snapshot',
  templateUrl: './snapshot.page.html',
  styleUrls: ['./snapshot.page.scss'],
})
export class SnapshotPage implements OnInit {

  constructor(private navCtrl: NavController, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  }

  goToPage(url: string) {
    this.navCtrl.navigateForward(['./' + url], {relativeTo: this.route});
  }

}
