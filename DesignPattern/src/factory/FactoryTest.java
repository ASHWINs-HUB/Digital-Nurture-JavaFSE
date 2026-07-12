package factory;

public class FactoryTest {

    public static void main(String[] args) {

        DocumentFactory factory;


        factory = new DocumentFactory() {
            @Override
            public Document createDocument() {
                return new WordDocument();
            }
        };

        Document word = factory.createDocument();
        word.open();


        factory = new DocumentFactory() {
            @Override
            public Document createDocument() {
                return new PdfDocument();
            }
        };

        Document pdf = factory.createDocument();
        pdf.open();


        factory = new DocumentFactory() {
            @Override
            public Document createDocument() {
                return new ExcelDocument();
            }
        };

        Document excel = factory.createDocument();
        excel.open();
    }
}