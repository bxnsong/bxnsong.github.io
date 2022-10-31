// @flow strict

export type CommandType = {|
  name: string,
  url: string,
  searchurl?: string,
|};

export type CommandNames = 'fb' | 'm' | 'gm' | 'yt' | 'gh' | 'r' | 'g' | 'n' | 'cal' | 'DEFAULT';

export type CommandDataTableType = {|
  name: string,
  url: string,
  command: CommandNames,
|};

export type ColumnDataTableType = {|
  data: string,
  title: string,
|};

export const COMMANDS: {[CommandNames]: CommandType} = {
  fb: {
    name: 'Facebook',
    url: 'https://facebook.com/',
    searchurl: 'https://www.facebook.com/search/top/?q=',
  },
  m: {
    name: 'Messenger Web',
    url: 'https://www.messenger.com/',
  },
  gm: {
    name: 'Gmail',
    url: 'https://mail.google.com/mail/u/0',
    searchurl: 'https://mail.google.com/mail/u/',
  },
  yt: {
    name: 'YouTube',
    url: 'https://youtube.com/',
    searchurl: 'https://www.youtube.com/results?search_query=',
  },
  gh: {
    name: 'GitHub',
    url: 'https://github.com/',
    searchurl: 'https://www.github.com/search?q=',
  },
  r: {
    name: 'Reddit',
    url: 'https://reddit.com/',
    searchurl: 'https://www.reddit.com/search?q=',
  },
  g: {
    name: 'Google',
    url: 'https://google.com/',
    searchurl: 'https://www.google.com/search?q=',
  },
  n: {
    name: 'Netflix',
    url: 'https://netflix.com/',
    searchurl: 'https://www.netflix.com/search?q=',
  },
  cal: {
    name: 'Google Calendar',
    url: 'https://calendar.google.com/calendar/r',
  },
  DEFAULT: {
    name: 'Default - Google Search',
    url: 'https://google.com/',
    searchurl: 'https://www.google.com/search?q=',
  },
};
