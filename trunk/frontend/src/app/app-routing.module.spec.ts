import { AppRoutingModule } from './app-routing.module';

describe('AppRoutingModule', () => {
  let appRoutingModule: AppRoutingModule;

  beforeEach(() => {
    appRoutingModule = new AppRoutingModule();
  });

  xit('should create an instance', () => {
    expect(appRoutingModule).toBeTruthy();
  });
});
