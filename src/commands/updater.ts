import type { UpdateInfo } from "@/lib/types";

/**
 * Update checking is intentionally disabled.
 */
export const checkForUpdates = async (): Promise<UpdateInfo | null> => {
  return null;
};

/**
 * Installing app updates is intentionally disabled.
 */
export const installUpdate = async (): Promise<void> => {
  return;
};
