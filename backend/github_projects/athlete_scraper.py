from typing import Any
import scrapy
from scrapy.http import Response

class Athlete(scrapy.Spider):
    start_urls =  [
        "https://worldathletics.org/athletes"
    ]
    def parse(self, response: Response, **kwargs: Any) -> Any:
        return super().parse(response, **kwargs)