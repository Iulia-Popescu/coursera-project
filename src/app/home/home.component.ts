import {Component, Inject, OnInit} from '@angular/core';
import {Dish} from '../shared/dish';
import {DishService} from '../services/dish.service';
import {Promotion} from '../shared/promotion';
import {PromotionService} from '../services/promotion.service';
import {Leader} from '../shared/leader';
import {LeaderService} from '../services/leader.service';
import {expand, flyInOut} from '../animations/app.animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  // tslint:disable-next-line:no-host-metadata-property
  host: {
    '[@flyInOut]': 'true',
    style: 'display: block;'
  },
  animations: [
    flyInOut(),
    expand()
  ]
})
export class HomeComponent implements OnInit {
  dish: Dish;
  promotion: Promotion;
  leader: Leader;
  dishErrMess: string;
  promoErrMess: string;
  leaderErrMess: string;

  constructor(
    private dishService: DishService,
    private promotionService: PromotionService,
    private leaderService: LeaderService,
    @Inject('BaseURL') public BaseURL
  ) {
  }

  ngOnInit(): void {
    this.dishService
      .getFeaturedDish()
      .subscribe(dish => this.dish = dish, dishErrMess => this.dishErrMess = (dishErrMess as any));
    this.promotionService
      .getFeaturedPromotion()
      .subscribe(promotion => this.promotion = promotion, promoErrMess => this.promoErrMess = (promoErrMess as any));
    this.leaderService
      .getFeaturedLeader()
      .subscribe(leader => this.leader = leader, leaderErrMess => this.leaderErrMess = (leaderErrMess as any));
  }

}
