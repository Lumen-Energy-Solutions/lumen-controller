export interface IValve {
  name: string
  status: boolean
  location: string
  devEui: string
  applicationId: string,
  isLoading?: boolean,
  lastUpdate?: string,
  batteryLevel?: number,
  waterCount: number,
  startedAt?: Date | null
}


export interface IValvesPending {
    devEui: string
    startedAt: Date
    status: string
  }
  