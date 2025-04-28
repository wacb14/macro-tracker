import { NgClass } from '@angular/common';
import { Component, inject, Input, OnInit, signal } from '@angular/core';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { filter } from 'rxjs';
interface item {
  icon: string;
  subtitle: string;
  route: string;
}
interface section {
  title: string;
  items: item[];
}

@Component({
  selector: 'app-sidebar',
  imports: [RouterLink, NgClass],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent implements OnInit {
  currentPath = '';
  @Input({ required: true }) isMobile = false;
  @Input({ required: true }) isHidden = signal(false);
  sections: section[] = [
    {
      title: 'Dashboards',
      items: [
        {
          icon: 'fluent:food-16-regular',
          subtitle: "Today's progress",
          route: '',
        },
        {
          icon: 'ant-design:bulb-outlined',
          subtitle: 'Insights',
          route: 'insights',
        },
        {
          icon: 'fluent-mdl2:health',
          subtitle: 'Health Report',
          route: 'health-report',
        },
      ],
    },
    {
      title: 'Foods',
      items: [
        { icon: 'bx:food-menu', subtitle: 'Search Food', route: 'search-food' },
        {
          icon: 'mdi:food-outline',
          subtitle: 'Custom Food',
          route: 'custom-food',
        },
        {
          icon: 'material-symbols:ramen-dining-outline-rounded',
          subtitle: 'My Foods',
          route: 'my-foods',
        },
      ],
    },
    {
      title: 'Reports',
      items: [
        { icon: 'formkit:week', subtitle: 'Weekly', route: 'report/weekly' },
        { icon: 'formkit:month', subtitle: 'Monthly', route: 'report/monthly' },
        {
          icon: 'fluent-mdl2:calendar-year',
          subtitle: 'Yearly',
          route: 'report/yearly',
        },
      ],
    },
  ];

  private router = inject(Router);

  ngOnInit() {
    this.setCurrentPath(this.router.url);

    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.setCurrentPath(event.url);
      });
  }

  setCurrentPath(url: string) {
    this.currentPath = url.split('?')[0].split('#')[0].split('/')[1];
  }

  closeMenu() {
    if (this.isMobile) {
      this.isHidden.set(true);
    }
  }
}
