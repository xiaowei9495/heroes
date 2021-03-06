import { Component, OnInit, HostBinding } from '@angular/core';
import { slideInDownAnimation } from '../animations';
import { Router } from '@angular/router';
// headerTitle服务
import { TitleService } from '../server/title.service';
@Component({
  selector: 'app-player-detail',
  templateUrl: './player-detail.component.html',
  styleUrls: ['./player-detail.component.less'],
  animations: [slideInDownAnimation],
})
export class PlayerDetailComponent implements OnInit {
  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display') display = 'block';
  constructor(private router: Router, private titleserver: TitleService) { }

  ngOnInit() {
    this.titleserver.titleChange.emit('寒冰手');
  }
  goGame(id) {
    this.router.navigate(['main/game', id]);
  }
}
