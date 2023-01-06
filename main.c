#include <stdio.h>
#include <stdlib.h>

int main()
{

    FILE *fr = fopen("vite.config.js", "r");
    char fileBuffer[500] = "put this in the file";

    // fprintf(fr, fileBuffer);

    printf("%s\n", fileBuffer);
    return 0;
}