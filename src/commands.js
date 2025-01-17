// @flow strict

export type CommandType = {|
  name: string,
  url: string,
  searchurl?: string,
|};

export type CommandNames = 'fb' | 'm' | 'exp' | 't' | 'gm' | 'yt' | 'gh' | 'pr' | 'r' | 'g' | 'n' | 'cal' | 'DEFAULT';

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
  pr: {
    name: 'Discord PRs',
    url: 'https://github.com/discord/discord/pulls/@me',
    searchurl: 'https://github.com/discord/discord/pulls/',
  },
  exp: {
    name: 'Discord Experiments',
    url: 'https://admin.discord.co/experiments/',
  },
  r: {
    name: 'Reddit',
    url: 'https://reddit.com/',
    searchurl: 'https://www.reddit.com/search?q=',
  },
  t: {
    name: 'Twitch',
    url: 'https://twitch.tv/',
    searchurl: 'https://www.twitch.tv/',
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
