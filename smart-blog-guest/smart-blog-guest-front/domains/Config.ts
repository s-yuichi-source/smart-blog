import { NuxtRuntimeConfig } from '@nuxt/types/config/runtime';
import { axiosModule } from '@/infras/axios/AxiosFactory';

export class Config {
  public apiPath = '';
  public appName = '';
}

export class ConfigLoader {
  private static config: Config;
  private static runFlag: boolean = false;

  static async getConfig() {
    if (!this.runFlag) {
      this.runFlag = true;
      const runtimeConfig = await this.readRuntimeConfig();
      this.config = {
        ...(await axiosModule.get(this.getConfigUrl(runtimeConfig.environment)))
          .data,
      };
      axiosModule.defaults.baseURL = this.config.apiPath;
    }
    await this.readConfig();
    return this.config;
  }

  static async readRuntimeConfig(): Promise<NuxtRuntimeConfig> {
    return await new Promise<NuxtRuntimeConfig>(resolve =>
      this.waitForNuxtLoad(resolve)
    );
  }

  private static waitForNuxtLoad(resolve: (value: NuxtRuntimeConfig) => void) {
    if (!window.$nuxt) {
      setTimeout(this.waitForNuxtLoad.bind(this, resolve), 30);
    } else {
      resolve(window.$nuxt.$config);
    }
  }

  static async readConfig(): Promise<Config> {
    return await new Promise<Config>(resolve =>
      this.waitForConfigLoad(resolve)
    );
  }

  private static waitForConfigLoad(resolve: (value: Config) => void) {
    if (!this.config) {
      setTimeout(this.waitForConfigLoad.bind(this, resolve), 30);
    } else {
      resolve(this.config);
    }
  }

  private static getConfigUrl(env: string): string {
    return env === 'spring-host'
      ? '/api/frontconfig'
      : `/resources/config_local.json`;
  }
}
