using System.Collections.Generic;

namespace Back
{
  public interface ICrud<T,U>
  {
    void Create(T pId, U pVal);
    void Update(T pId, U pVal);
    void Delete(T pId);
    U Get(T pId);
    IEnumerable<KeyValuePair<T, U>> GetAll();
  }
}