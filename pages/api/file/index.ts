import fs from 'fs';
import path from 'path';
import Papa from 'papaparse';

export default function handler(req, res) {
    const { from, to } = req.query;

    // Проверяем, что параметры 'from' и 'to' заданы
    if (!from || !to) {
        return res.status(400).json({ error: "Отсутствие параметров запроса 'from' или 'to'" });
    }

    // Путь к CSV файлу
    const filePath = path.join(process.cwd(), 'public/data.csv');
    const fileContent = fs.readFileSync(filePath, 'utf8');

    Papa.parse(fileContent, {
        header: true,
        complete: (results) => {
            const totalRows = results.data.length;
            const totalPages = Math.ceil(totalRows / 15);
            const filteredData = results.data.slice(parseInt(from), parseInt(to));
            res.status(200).json( {data: filteredData, totalPages} );
        },
    });
}