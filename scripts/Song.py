from util import *

minor_fontSize = '5'
class Song:
    def __init__(self, title_main, title_minor, main, minor):
        self.title_main = title_main
        self.title_minor = title_minor
        main = rm_period(main)
        minor = rm_period(minor)
        self.main = main.split('\n')
        self.minor = minor.split('\n')

    def mkdw_gen(self, mdFL):
        # write lyrics into a markdown file
        # every two lines into one page

        f = open(mdFL,'w')

        i = 0
        n_main = len(self.main) # number of lines of the lyrics

        for i in range(0,n_main, 2):

            f.write(f"## {self.title_main}\n")
            f.write(f"<font size='6'>_{self.title_minor}_ </font>\n")
            f.write(f"<br></br>\n")

            f.write(f"### {self.main[i]}\n")
            if i+1 < n_main:
                f.write(f"### {self.main[i+1]}\n")

            f.write(f"#### {self.minor[i]}\n")
            if i+1 < n_main:
                f.write(f"#### {self.minor[i+1]}\n")
            f.write('---\n')

        f.close()
        print(f"{mdFL} generated.")


