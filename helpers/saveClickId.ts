export const saveClickId = () => {
  onMounted(() => {
    const route = useRoute();
    const clickid = route.query.clickid;
    if (!clickid) {
      return;
    }

    // 30 days in seconds
    const seconds = 2592000;
    document.cookie = `clickid=${clickid}; max-age=${seconds}; domain=${window.location.host}; path=/`;
  });
};
