import { DatePipe, NgClass } from '@angular/common';
import { Component, OnInit } from '@angular/core';

type Warning = 'red';
type Success = 'green';
type Advice = 'blue';
type Goal = 'yellow';
type NotificationType = Warning | Success | Advice | Goal;

interface Notification {
  id: number;
  type: NotificationType;
  icon: string;
  title: string;
  comment: string;
  time: Date;
  isRead: boolean;
}

@Component({
  selector: 'app-notifications',
  imports: [DatePipe, NgClass],
  templateUrl: './notifications.component.html',
  styleUrl: './notifications.component.css',
})
export class NotificationsComponent implements OnInit {
  activeNotifications = 0;
  notifications: Notification[] = [
    {
      id: 1,
      type: 'green', // Success
      icon: 'octicon:goal-16',
      title: 'Reached out your daily calorie goal',
      comment: 'Well done!',
      time: new Date('2023-05-15T08:30:00'),
      isRead: false,
    },
    {
      id: 2,
      type: 'yellow',
      icon: 'octicon:goal-16',
      title: 'Reached out 50% of your daily calories',
      comment: 'Keep it up!',
      time: new Date('2023-05-15T08:30:00'),
      isRead: true,
    },
    {
      id: 3,
      type: 'red', // Warning
      icon: 'material-symbols:warning-outline-rounded',
      title: 'Reached out 137% of your daily fat',
      comment: 'Be careful!',
      time: new Date('2023-05-15T07:30:00'),
      isRead: false,
    },
    {
      id: 4,
      type: 'blue',
      icon: 'mdi:water',
      title: "Don't forget to drink water",
      comment: 'Keep hydrated and healthy',
      time: new Date('2023-05-15T05:47:00'),
      isRead: true,
    },
    {
      id: 5,
      type: 'blue',
      icon: 'mdi:water',
      title: "Don't forget to drink water",
      comment: 'Keep hydrated and healthy',
      time: new Date('2023-05-15T05:47:00'),
      isRead: false,
    },
  ];

  ngOnInit(): void {
    this.calculateActiveNotifications();
  }

  calculateActiveNotifications() {
    for (const notification of this.notifications) {
      if (!notification.isRead) this.activeNotifications++;
    }
  }

  markAsRead(id: number) {
    if (this.activeNotifications > 0) {
      let index = this.notifications.findIndex((n) => {
        return n.id == id;
      });
      if (!this.notifications[index].isRead) {
        this.notifications[index].isRead = true;
        this.activeNotifications--;
      }
    }
  }
}
