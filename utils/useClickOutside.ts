// by convention, composable function names start with "use"
export function useClickOutside($el, callback) {
  function $handleClickOutside(ev) {
    // @ts-ignore
    if (!$el.value.contains(ev.target)) {
      callback && callback();
    }
  }
  // a composable can also hook into its owner component's
  // lifecycle to setup and teardown side effects.
  onMounted(() => window.addEventListener("click", $handleClickOutside, true));
  onUnmounted(() => window.removeEventListener("click", $handleClickOutside, true));
}
