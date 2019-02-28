using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Runtime.Serialization;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace Back.Controllers
{
  //[DataContract]
  //public class MyData
  //{
  //  [DataMember]
  //  public int Id { get; set; }
  //  [DataMember]
  //  public string Value { get; set; }
  //}

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

    // PATCH api/values/5 same as put
    [HttpPatch("{id}")]
    public void Patch(int id, [FromBody] string value) => _data.Update(id, value);

    // DELETE api/values/5
    [HttpDelete("{id}")]
    public void Delete(int id) => _data.Delete(id);
  }
}
