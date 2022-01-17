#include <iostream>
#include <cstdio>
#include <cstdlib>
#include <windows.h>
#include <cstring>
#include <fstream>
using namespace std;
typedef long long lld;
string tmp;
bool fs(false);
lld cnt(-1);
inline bool CheckDigit(char c)
{
	return ((c>='0')&&(c<='9'));
}
inline lld getint()
{
	lld x(0),f(1);
	char c(getchar());
	for(;(!CheckDigit(c));c=getchar())if(c=='-')f=-1;
	for(;CheckDigit(c);c=getchar())x=(x<<3)+(x<<1)+(c^48);
	return x*f;
}
inline void putint(lld x)
{
	if(x<0)putchar('-'),x=-x;
	if(x>9)putint(x/10);
	putchar(x%10+'0');
	return;
}
int main()/*OpenG-qkmb*/
{
	ifstream fin("haerlib.txt");
	ofstream fout("haerlib.xml");
	fout<<"<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n"
	"<lib>\n<filedata>\n<mhn>66</mhn>\n"
	"<minhn>1</minhn>\n<thisyear>2022</thisyear>"
	"<actualminhn>-1</actualminhn>\n"
	"<rg>32</rg>\n</filedata>\n"
	"<haerdata>\n";
	getline(fin,tmp);
	while(tmp!="[End]")
	{
		if(tmp=="[File]")
		{
			fs=true;
			getline(fin,tmp);
			continue;
		}
		if((tmp.length()<1)||(tmp[0]=='/')||(!fs))
		{
			getline(fin,tmp);
			continue;
		}
		fout<<"<haer id=\""<<cnt<<"\">\n"
		"<name id=\"name_"<<cnt<<"\">"<<tmp<<"</name>\n";
		getline(fin,tmp);
		fout<<"<born id=\"born_"<<cnt<<"\">"<<tmp<<"</born>\n";
		getline(fin,tmp);
		fout<<"<des id=\"des_"<<cnt<<"\">"<<tmp<<"</des>\n";
		getline(fin,tmp);
		fout<<"<dgs id=\"dgs_"<<cnt<<"\">"<<tmp<<"</dgs>\n";
		getline(fin,tmp);
		fout<<"<haerona id=\"haerona_"<<cnt<<"\">"<<tmp<<"</haerona>\n";
		getline(fin,tmp);
		fout<<"<dgmhx id=\"dgmhx_"<<cnt<<"\">"<<tmp<<"</dgmhx>\n";
		getline(fin,tmp);
		fout<<"<die id=\"die_"<<cnt<<"\">"<<tmp<<"</die>\n";
		getline(fin,tmp);
		fout<<"<info id=\"info_"<<cnt<<"\">\n";
		while(tmp!="[info-end]")
		{
			fout<<tmp<<endl;
			getline(fin,tmp);
		}
		fout<<"</info>\n</haer>\n";
		getline(fin,tmp);
		++cnt;
	}
	fout<<"</haerdata>\n</lib>";
	fin.close();
	fout.close();
	return 0;
}