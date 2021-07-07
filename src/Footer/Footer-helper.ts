export const setFooterMargin = (isHome: boolean): void => {
  const footer = document.getElementById('footer');
  if (footer) {
    isHome
      ? (footer.style.marginTop = '94vh')
      : (footer.style.marginTop = '10vh');
  }
};
