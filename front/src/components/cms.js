import React from 'react';

import CmsNav from './cms.navbar';
import CmsRouter from './cms.router';

import app from '../app';

export default function Cms() {
  const { route } = app.getState();
  return (
    <div>
      <CmsNav />
      {CmsRouter.routes[route]()}
    </div>
  );
}
