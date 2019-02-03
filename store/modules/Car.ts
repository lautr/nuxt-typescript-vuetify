import { Mutation, Module, VuexModule } from 'vuex-module-decorators'

@Module()
class Car extends VuexModule {
  wheels = 2

  @Mutation
  incrWheels(extra: number) {
    this.wheels += extra
  }

  get axles() {
    return this.wheels / 2
  }
}

export default Car
