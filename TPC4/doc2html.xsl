<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    version="2.0">
    
    <xsl:template match="doc">
        <html>
            <head>
                <title><xsl:value-of select="tit"/></title>
                <meta charset="UT-8"></meta>
                
            </head>
            <body>
                <table>                          
                    <xsl:apply-templates/> 
                </table>
            </body>
        </html>
    </xsl:template>
    
    <xsl:template match="prov">
        <tr>
            <th>Província:</th> <td><xsl:value-of select="."/></td>
        </tr>
    </xsl:template>
    
    <xsl:template match="local">
        <tr>
            <th>Local:</th> <td><xsl:value-of select="."/></td>
        </tr>
    </xsl:template>
    
    <xsl:template match="tit">
        <tr>
            <th>Título:</th> <td><xsl:value-of select="."/></td>
        </tr>
    </xsl:template>
    
    <xsl:template match="inst">
        <tr>
            <th>Instrumentos:</th> <td><xsl:value-of select="."/></td>
        </tr>
    </xsl:template>
    
    <xsl:template match="obs">
        <tr>
            <th>Observações:</th> <td><xsl:value-of select="."/></td>
        </tr>
    </xsl:template>
    
    <xsl:template match="file">
        <tr>
            <th>File:</th> <td><xsl:value-of select="."/></td>
        </tr>
    </xsl:template>
    
    <xsl:template match="duracao">
        <tr>
            <th>Duração:</th> <td><xsl:value-of select="."/></td>
        </tr>
    </xsl:template>
    
    <xsl:template match="musico">
        <tr>
            <th>Músico:</th> <td><xsl:value-of select="."/></td>
        </tr>
    </xsl:template>
</xsl:stylesheet>