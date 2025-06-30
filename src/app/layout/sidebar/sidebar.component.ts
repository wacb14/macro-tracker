import { NgClass } from '@angular/common';
import { Component, inject, Input, OnInit, signal } from '@angular/core';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { filter } from 'rxjs';
import { ThemeService } from '../../services/theme.service';
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
  private router = inject(Router);
  private themeService = inject(ThemeService);

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
          icon: 'fluent-mdl2:health',
          subtitle: 'Health Report',
          route: 'health-report',
        },
        {
          icon: 'ant-design:bulb-outlined',
          subtitle: 'Insights',
          route: '/insights',
        },
      ],
    },
    {
      title: 'Food',
      items: [
        { icon: 'bx:food-menu', subtitle: 'Add Food', route: 'add-food' },
        {
          icon: 'material-symbols:ramen-dining-outline-rounded',
          subtitle: 'Manage Food',
          route: 'manage-food',
        },
        {
          icon: 'mdi:food-outline',
          subtitle: 'Custom Food',
          route: 'custom-food',
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
  getTheme(){
    return this.themeService.getTheme();
  }
}
