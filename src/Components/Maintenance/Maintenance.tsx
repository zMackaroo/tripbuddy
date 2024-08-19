import React from 'react';
import { ApplicationMaintenanceMode } from '@Utils/Constant';
import './Maintenance.scss';

function Maintenance({ children }: React.PropsWithChildren) {
  const isMaintenance = ApplicationMaintenanceMode;

  return isMaintenance === 'true' ? <div>Maintenance</div> : children;
}

export default Maintenance;
