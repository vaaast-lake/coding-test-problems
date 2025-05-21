#include <bits/stdc++.h>
using namespace std;

int n, c, tmp;
vector<int> v;
map<int, int> mp, mp_first;

bool cmp(int a, int b)
{
  if (mp[a] == mp[b])
  {
    return mp_first[a] < mp_first[b];
  }
  return mp[a] > mp[b];
}

int main()
{
  ios_base::sync_with_stdio(false);
  cin.tie(NULL);
  cout.tie(NULL);
  // freopen("input.txt", "r", stdin);
  // freopen("output.txt", "w", stdout);

  cin >> n >> c;

  for (int i = 0; i < n; ++i)
  {
    cin >> tmp;
    mp[tmp]++;
    if (mp_first[tmp] == 0)
      mp_first[tmp] = i + 1;
    v.push_back(tmp);
  }

  sort(v.begin(), v.end(), cmp);

  for (auto i : v)
  {
    cout << i << " ";
  }

  return 0;
}