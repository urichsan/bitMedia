using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;

namespace Back2
{
  public class Startup
  {
#if DEBUG
    readonly string MyAllowSpecificOrigins = "_myAllowSpecificOrigins";
#endif
    public void ConfigureServices(IServiceCollection services)
    {
#if DEBUG
      services.AddCors(options =>
      {
        options.AddPolicy(MyAllowSpecificOrigins,
        builder =>
        {
          builder.WithOrigins("http://localhost:8080")
          .AllowAnyHeader()
          .AllowAnyMethod();
        });
      });
#endif
      services.AddMvc();
    }

    public void Configure(IApplicationBuilder app, IHostingEnvironment env)
    {
      if (env.IsDevelopment())
      {
        app.UseDeveloperExceptionPage();
      }

#if DEBUG
      app.UseCors(MyAllowSpecificOrigins);
#endif
      app.UseStaticFiles();
      app.UseMvc();
    }
  }
}
