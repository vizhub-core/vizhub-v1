import queryString from 'query-string';

export const getShowConfigurator = ({ location }) =>
  queryString.parse(location.search).edit !== undefined;

export const setShowConfigurator = ({ history, match, location }, value) => {
  history.push({
    pathname: match.url,
    search: queryString.stringify(
      Object.assign(queryString.parse(location.search), {
        edit: value ? null : undefined
      })
    )
  });
};
