import requests
import json

SECRET = "01d762901510b3c7f422595fa18d8d7bd71c1f3e58ad860fd3ae2d0c87a80955"
API_URL = f"""
    https://schubergphilis.workflows.okta-emea.com/api/flo/d71da429cdb215bef89ffe6448097dee/invoke?clientToken={SECRET}&url=/poi/v1/locations&method=GET&locationsVisibilityScopes=ACCOUNTS_STATIONS
"""


def fetchData(url: str) -> (dict | None):
    """
    Functie voor het ophalen van de data van schuberg, dit moet dan
    genormalizeerd worden.

    Args:
        url (str): url naar de API
    Returns:
        (None | dict): of niks of de data van de API
    """
    try:
        response = requests.get(url)
        response.raise_for_status()
        return response.json()
    except requests.exceptions.RequestException as ex:
        print(f"Error in het ophalen van de data: {ex}")
        return None


def normalizeData(data) -> None:
    """
    Het veranderen van de data zodat het makkelijker te gebruiken
    is voor het maken van een table syntax voor in de database.

    Args:
        data (None | dict): de data van de API
    Returns:
        None
    """
    pass


def createTable(
    reponseData: (dict | None),
    tableName="ChargingStations"
) -> str:
    """
    Functie om de syntax te schrijven voor het maken van een table,
    dit volgt de syntax van PostgreSQL

    Args:
        reponseData (dict | None): data uit de API om een table van te maken
        tableName   (str):         naam voor de tabel
    Returns:
        str: De syntax voor het maken van de table
    """
    if reponseData is None:
        return ""
    try:
        if not isinstance(data, list):
            raise ValueError("API Response is geen list")
        firstElement = data[0]
        if not isinstance(firstElement, dict):
            raise ValueError("Data moet een dictionary zijn.")
        columns = []
        for key, value in firstElement.items():
            columnType = "VARCHAR(255)"
            if isinstance(value, int):
                columnType = "INTEGER"
            elif isinstance(value, float):
                columnType = "NUMERIC"
            elif isinstance(value, bool):
                columnType = "BOOLEAN"
            columns.append(f"{key} {columnType} NOT NULL")

        createTableSyntax = f"CREATE TABLE IF NOT EXISTS {tableName} (\n\t)"
        createTableSyntax += ",\n\t".join(columns)
        createTableSyntax += "\n);"
        return createTableSyntax
    except Exception as ex:
        print(f"Kan niet verder: {ex}")
        return ""


if __name__ == "__main__":
    data = fetchData(API_URL)
    print(data)
    print(createTable(data))