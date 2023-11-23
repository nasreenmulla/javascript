package database;

import entity.Coders;

public class TestCodersTable {

    public static void main(String[] args) {

     Coders code=new Coders("nasreen",28L);


        //Insert this object into DB !

//           < ENTITY CLASS>
       new GenericDB<Coders>.addRow(Co)//<Coders> will be entity tyep
        //and addrow(this will be entity type,and object)
    }
}
