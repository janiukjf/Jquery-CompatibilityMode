describe("When in IE compatibility mode", function(){
  beforeEach(function(){
    spyOn($.CompatibilityMode, 'isInCompatibilityMode').andReturn(true);  
  });
  
  it("runs the callback", function(){
    var callback = jasmine.createSpy();
    $.CompatibilityMode(callback);
    expect(callback).toHaveBeenCalled();
    
  });
  
  it("allows for no callback to be passed", function(){
    expect($.CompatibilityMode()).toBeTruthy();
  });
  
  
});

describe("When not IE compatibility mode", function(){
  
  it("runs the callback", function(){
    spyOn($.CompatibilityMode, 'isInCompatibilityMode').andReturn(false);
    var callback = jasmine.createSpy();
    $.CompatibilityMode(callback);
    expect(callback).not.toHaveBeenCalled();
    
  });
  
  
});
