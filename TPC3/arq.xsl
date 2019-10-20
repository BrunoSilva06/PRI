<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    version="2.0">
    
    <xsl:output method="xhtml" indent="yes" encoding="UTF-8"/>
    
    <xsl:template match="/">
        <xsl:result-document href="Website/index.html">
            <html>
                <head>
                    <title>Arqueossítios</title>
                    <meta charset="UTF-8"/>
                </head>
                <body>
                    <h1>Arqueossítios em Portugal</h1>
                    <ol>
                        <xsl:apply-templates/>
                    </ol>   
                </body>
            </html>
        </xsl:result-document>
        <xsl:apply-templates mode="individual"/>
    </xsl:template>
    
    <xsl:template match="ARQELEM" mode="individual">
        <xsl:result-document href="Website/{generate-id()}.html">
            <html>
                <head>
                    <title>Arqueossítio: Página Individual</title>
                    <meta charset="UTF-8"/>
                </head>
                <body>
                    <h1><xsl:value-of select="IDENTI"/></h1>
                    <table>
                        <tr>
                            <th>Lugar:</th>
                            <td><xsl:value-of select="LUGAR"/></td> 
                        </tr>
                        <tr>
                            <th>Freguesia:</th>
                            <td><xsl:value-of select="FREGUE"/></td> 
                        </tr>
                        <tr>
                            <th>Concelho:</th>
                            <td><xsl:value-of select="CONCEL"/></td> 
                        </tr>
                        <tr>
                            <th>Latitude:</th>
                            <td><xsl:value-of select="LATITU"/></td> 
                        </tr>
                        <tr>
                            <th>Longitude:</th>
                            <td><xsl:value-of select="LONGIT"/></td> 
                        </tr>
                        <tr>
                            <th>Altitude:</th>
                            <td><xsl:value-of select="ALTITU"/></td> 
                        </tr>
                        <tr>
                            <th>Autor:</th>
                            <td><xsl:value-of select="AUTOR"/></td> 
                        </tr>
                        <tr>
                            <th>Data:</th>
                            <td><xsl:value-of select="DATA"/></td> 
                        </tr>
                    </table>  
                    <hr width="40%"/>
                    <address>
                        <a href="index.html#{generate-id()}">Voltar ao índice</a>
                    </address>
                </body>
            </html>
        </xsl:result-document>
    </xsl:template>
    
    
    <xsl:template match="ARQELEM">
        <li id="{generate-id()}">
            <a href="{generate-id()}.html"> <xsl:value-of select="IDENTI"/></a>
        </li>
    </xsl:template>
    
</xsl:stylesheet>