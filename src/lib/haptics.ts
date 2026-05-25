export const haptics = {
  tap: () =>
    navigator.vibrate?.(10),

  success: () =>
    navigator.vibrate?.([
      10,
      20,
      10,
    ]),

  longPress: () =>
    navigator.vibrate?.(20),
};