//
export default function test1({ mySqlConnection }: any) {
  return new (class Agenda {
    contructor() {}
    mySql = mySqlConnection;
  })();
}
