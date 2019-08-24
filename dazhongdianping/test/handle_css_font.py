from fontTools.ttLib import TTFont


font_file = TTFont("number.woff")
font_file.saveXML("test.xml")