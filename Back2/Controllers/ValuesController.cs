using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace Back.Controllers
{
  [Route("api/[controller]")]
  public class ValuesController : Controller
  {
    private CrudData _data = new CrudData();

    // GET api/values
    [HttpGet]
    public IEnumerable<object> Get() => _data.GetAll().Select(x=>new {Id = x.Key, Value=x.Value});

    // GET api/values/5
    [HttpGet("{id}")]
    public string Get(int id) => _data.Get(id);

    // POST api/values
    [HttpPost]
    public void Post([FromBody] string value) => _data.Create(value);

    // PUT api/values/5
    [HttpPut("{id}")]
    public void Put(int id, [FromBody] string value) => _data.Update(id,value);

    // DELETE api/values/5
    [HttpDelete("{id}")]
    public void Delete(int id) => _data.Delete(id);
  }
}
