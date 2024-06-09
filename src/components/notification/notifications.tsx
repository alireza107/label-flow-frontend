'use client';

import { useNotificationStore } from '@/store/notification.store';

import { NotificationToast } from './notification-toast';

export const Notifications: React.FC = () => {
  const notifications = useNotificationStore((state) => state.notifications);
  if (notifications.length < 1) return null;

  return (
    <div className="fixed  bottom-3 right-3 flex flex-col-reverse gap-3">
      {notifications.map((p) => {
        return <NotificationToast key={`notification-${p.id}`} notification={p} />;
      })}
    </div>
  );
};
