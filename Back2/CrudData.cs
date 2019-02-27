using System.Collections.Generic;
using System.Linq;

namespace Back
{
  public class CrudData:ICrud<int,string>
  {
    private Dictionary<int, string> _dataDictionary = new Dictionary<int, string>() { {-1,"sample"}, {-2,"sample2"} };

    public void Create(string pVal) => Create(_dataDictionary.Keys.Max(x=>x)+1,pVal);

    public void Create(int pId, string pVal) => _dataDictionary.Add(pId,pVal);

    public void Update(int pId, string pVal) => _dataDictionary[pId] = pVal;

    public void Delete(int pId) => _dataDictionary.Remove(pId);

    public string Get(int pId) => _dataDictionary[pId];

    public IEnumerable<KeyValuePair<int, string>> GetAll() => _dataDictionary.AsEnumerable();
  }
}