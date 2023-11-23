package utility;

import java.io.File;
import java.io.IOException;

public class FileUtility {

    public static boolean createFile(String FileNamewithpath) {
        File file = new File(FileNamewithpath);
        boolean fileCreated = false;
        try {
            String filename = "C:\\Users\\NAMULLA\\Desktop\\Practice\\TechCodingMafia\\file\\" + "newfile.txt";
            fileCreated = file.createNewFile();
        } catch (IOException e) {
            e.printStackTrace();
        }
        return fileCreated;
    }

    public static void main(String[] args) {
        String filename="C:\\Users\\NAMULLA\\Desktop\\Practice\\TechCodingMafia\\file\\"+"newfile.txt";
        createFile(filename);
    }
}
