import React from 'react';

export interface Instructor {
  name: string;
  role: string;
  description: string;
  image?: string;
}

export interface ClassSession {
  day: string;
  times: string[];
}

export interface LocationSchedule {
  name: string;
  address: string;
  cityStateZip: string;
  sessions: ClassSession[];
}

export interface Service {
  title: string;
  description: string;
  icon: React.ReactNode;
}
