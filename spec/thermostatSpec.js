describe('Thermostat', function() {
  var thermostat;

  beforeEach( function() {
    thermostat = new Thermostat;
    console.log(thermostat)
  });

  it('has an initial temperature of 20', function() {
    expect(thermostat.temperature).toBe(20)
  });
});
